import Observer from "./observer/index";

const components = [Observer];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { install, Observer };
export default Observer;
