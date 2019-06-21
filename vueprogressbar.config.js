// 定义常量配置VueProgressBar所需要参数配置
const VueProgressBarOption = {
    color: '#3eb1fc',// 进度条颜色
    failedColor: 'red',// 失败颜色
    thickness: '3px',// 进度条厚度
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',// 进度条显示位置
    inverse: false, // 是否反转进度条方向
}
// 暴露配置
export default VueProgressBarOption