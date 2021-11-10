<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "observer",
  data() {
    return {
      observer: null
    };
  },
  props: {
    root: {
      type: [Object],
      default: null
    },
    rootMargin: {
      type: [String, Number],
      default: "0px"
    },
    // 意味着只要有一个target像素出现在root元素中，回调函数将会被执行
    threshold: {
      type: [Array, Number],
      default: 0
    }
  },
  methods: {
    unobserve() {
      this.observer.unobserve(this.$el);
    }
  },
  mounted() {
    const options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
    this.observer = new IntersectionObserver(entries => {
      this.$emit("on-change", entries[0], this.unobserve);
    }, options);
    this.observer.observe(this.$el);
  },
  beforeDestroy() {
    if (this.observer) {
      this.unobserve();
      this.observer = null;
    }
  }
};
</script>
