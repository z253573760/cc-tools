<template>
  <div>
    <div class="cc-uploader-warpper">
      <div class="cc-file-list-warpper">
        <transition-group
          name="list-complete"
          class="cc-file-list-item-warpper"
        >
          <div key="cc-uploader" class="cc-file-list-item">
            <div
              class="cc-file-uploader-warpper"
              :style="style"
              v-if="this.fileList.length < limit"
            >
              <input
                class="cc-file-uploader"
                :style="style"
                :accept="accept"
                @change="handlerUpload"
                type="file"
              />
              <div class="cc-upload">
                <div class="add-icon">+</div>
                <div v-if="text" style="font-size:12px" v-text="text"></div>
              </div>
            </div>
          </div>
          <div
            v-for="(item, index) in fileList"
            :key="item.uuid"
            class="cc-file-list-item"
          >
            <div class="cc-file-list-item-img-warpper" :style="style">
              <div class="cc-file-action-warpper">
                <i class="el-icon-view" @click="preview(index)" />
                <i class="el-icon-delete" @click="remove(index)" />
              </div>
              <transition name="fade" v-if="item.percentage === 100">
                <img :src="item.url" :alt="item.uuid" />
              </transition>
              <transition name="fade" v-else>
                <div class="progress-warpper">
                  <Progress
                    type="circle"
                    :width="width - 10"
                    :percentage="item.percentage"
                  />
                </div>
              </transition>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress } from "element-ui";
import { preLoadImg } from "../../../utils/img";
import { generateUUID } from "../../../utils/tools";
import { isFile } from "../../../utils/type";
import { warn } from "../../../utils/log";
import { ossUpload } from "../../../utils/aliOss";

export default {
  name: "CcUploader",
  components: {
    Progress
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 100
    },
    list: {
      type: Array,
      default: () => []
    },
    accept: {
      type: String,
      default: ".jpg,.jpeg,.png"
    },
    limit: {
      type: Number,
      default: 6
    },
    ossOpts: {
      type: Object,
      default: null
    },
    beforeUpload: {
      type: Function,
      default: file => file
    },
    beforeRemove: {
      type: Function,
      default: () => true
    },
    onPreview: {
      type: Function,
      default: () => {}
    },
    onSuccess: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      fileList: []
    };
  },
  created() {
    this.init();
  },
  computed: {
    style() {
      return {
        width: `${this.width}px`,
        height: `${this.width}px`
      };
    }
  },
  methods: {
    init() {
      this.fileList = this.list.map(_ => ({
        uuid: generateUUID(),
        percentage: 100,
        url: _
      }));
    },
    async remove(index) {
      const canRemove = await this.beforeRemove(
        {
          ...this.fileList[index]
        },
        index
      );
      if (!canRemove) return;
      this.fileList.splice(index, 1);
    },
    preview(index) {
      const result = this.fileList[index];
      this.onPreview({ ...result }, index);
    },
    async handlerBeforeUpload(file) {
      try {
        const result = await this.beforeUpload(file);
        if (isFile(result)) {
          return result;
        }
        warn("beforeUpload 返回的结果不是一个有效的file对象");
        return false;
      } catch (err) {
        warn(`beforeUolader ${err}`);
        return false;
      }
    },
    async handlerUpload(e) {
      const files = e.target.files;
      const file = files[0];
      e.target.value = "";
      const fileBeforeUpload = await this.handlerBeforeUpload(file);
      if (!fileBeforeUpload) return;
      if (!this.ossOpts) return;

      const uuid = generateUUID();
      this.fileList = [
        ...this.fileList,
        {
          uuid,
          url: "",
          percentage: 0
        }
      ];
      const curIndex = this.fileList.length - 1;
      await this.$nextTick();
      const result = await ossUpload(
        fileBeforeUpload,
        this.ossOpts,
        progressEvent => {
          const complete =
            ((progressEvent.loaded / progressEvent.total) * 60) | 0;
          this.fileList[curIndex].percentage = complete;
        }
      );
      if (result.err) {
        this.onError(result.err, fileBeforeUpload);
        setTimeout(() => {
          this.fileList.pop();
        }, 2000);
        return;
      }
      const timer = setInterval(() => {
        if (this.fileList[curIndex].percentage >= 95) {
          clearInterval(timer);
          return;
        }
        this.fileList[curIndex].percentage =
          this.fileList[curIndex].percentage + 1;
      }, 500);
      preLoadImg(result.url, () => {
        clearInterval(timer);
        this.fileList[curIndex].url = result.url;
        this.fileList[curIndex].percentage = 100;
        this.onSuccess(result.url, fileBeforeUpload);
      });
    }
  },
  watch: {
    list(cur) {
      this.init();
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  &::after,
  &::before {
    box-sizing: border-box;
  }
}
.cc-uploader-warpper {
  display: flex;
  flex-wrap: nowrap;
  background: #fff;
  overflow: hidden;
  position: relative;
  .cc-file-uploader-warpper {
    overflow: hidden;
    // width: 100px;
    // height: 100px;

    border-radius: 5px;
    border: 1px dashed #c0ccda;
    &:hover {
      border: 1px dashed skyblue;
    }
    .cc-file-uploader {
      position: absolute;
      cursor: pointer;
      //background: red;
      opacity: 0;
      top: 0;
      left: 0;
    }
    .cc-upload {
      color: #8c939d;
      font-size: 30px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .cc-file-list-warpper {
    display: flex;
    flex-wrap: nowrap;
    transition: 0.3s;
    .cc-file-list-item-warpper {
      transition: 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .cc-file-list-item {
      margin-right: 10px;
      transition: 0.3s;
      .cc-file-list-item-img-warpper {
        border: 1px solid #d9d9d9;
        padding: 5px;
        border-radius: 5px;
        // width: 100px;
        // height: 100px;
        position: relative;
        overflow: hidden;
        &:hover {
          .cc-file-action-warpper {
            display: flex;
          }
        }
        .cc-file-action-warpper {
          .el-icon-view,
          .el-icon-delete {
            cursor: pointer;
          }
          padding: 10px;
          z-index: 10;
          color: #fff;
          align-items: center;
          justify-content: space-around;
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          transform: translateX(-50%) translateY(-50%);
          top: 50%;
          left: 50%;
        }
        img {
          width: 100%;
          height: 100%;
          transition: 0.5s;
        }
        .progress-warpper {
          width: 100%;
          height: 100%;
          transition: 0.8s;
        }
      }
    }
  }
}
.fade-enter,
.fade-leave-to {
  position: absolute;
  transform: scale(0);
  opacity: 0;
}

.list-complete-enter {
  transform: translateX(200%) scale(0);
  opacity: 0;
}
.list-complete-leave-to {
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0);
  left: -100%;
}
.list-complete-leave-active {
  position: absolute;
}
</style>
