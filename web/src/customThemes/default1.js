// 默认1
export default {
    backgroundColor: 'rgb(255, 255, 255)',
    // 连线的颜色
    lineColor: 'rgb(0, 0, 0)',
    lineWidth: 1,
    // 概要连线的粗细
    generalizationLineWidth: 1,
    // 概要连线的颜色
    generalizationLineColor: 'rgb(0, 0, 0)',
    // 关联线默认状态的颜色
    associativeLineColor: 'rgb(0, 0, 0)',
    // 关联线文字颜色
    associativeLineTextColor: 'rgb(0, 0, 0)',
    //节点内边距
    paddingX: 8,
    paddingY: 4,
    //节点连线radius
    lineRadius: 4,
    // 根节点样式
    root: {
      fillColor: 'rgb(255, 255, 255)',
      color: 'rgb(0, 0, 0)',
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 1,
      fontSize: 9,
      fontWeight: 'normal',
    },
    // 二级节点样式
    second: {
      fillColor: 'rgb(255, 255, 255)',
      color: 'rgb(0, 0, 0)',
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 1,
      fontSize: 9,
      marginX: 8,
      marginY: 0,
    },
    // 三级及以下节点样式
    node: {
      fontSize: 9,
      color: 'rgb(0, 0, 0)',
      marginX: 8,
      marginY: 0,
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#fff',
      borderColor: '',
      borderWidth: 0,
      color: 'rgb(0, 0, 0)',
      marginX: 8,
      marginY: 0,
    }
  }
  