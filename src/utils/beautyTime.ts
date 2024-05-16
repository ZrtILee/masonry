/**
 * 人性化时间
 * @param {Object} timestamp
 */
function beautifyTime(timestamp: number) {
  let mistiming = Math.round(new Date().getTime() / 1000) - timestamp;
  let postfix = mistiming > 0 ? "前" : "后";
  mistiming = Math.abs(mistiming);
  let arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
  let arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];

  for (let i = 0; i < 7; i++) {
    let inm = Math.floor(mistiming / arrn[i]);
    if (inm != 0) {
      return inm + arrr[i] + postfix;
    }
  }
}

export default beautifyTime
