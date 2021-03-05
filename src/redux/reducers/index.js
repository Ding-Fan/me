import { jsPDF } from 'jspdf'
function printToPDF(element) {
  var doc = new jsPDF()

  doc.html(element, {
    callback: function (doc) {
      doc.setLanguage('zh-CN')
      doc.save()
    },
    fontFaces: [
      '-apple-system',
      'system-ui',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'PingFang SC',
      'Hiragino Sans GB',
      'Source Han Sans SC',
      'Noto Sans CJK SC',
      'Microsoft YaHei',
      'WenQuanYi Micro Hei',
      'WenQuanYi Zen Hei',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
    x: 10,
    y: 10,
  })
}
export const printPage = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRINT_PAGE':
      return {
        ...state,
        print_page: action.payload,
      }
    case 'DO_PRINT_PAGE':
      printToPDF(state.print_page)
      return state
    default:
      return state
  }
}
