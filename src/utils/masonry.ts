let grid: HTMLElement = null; // grid
let colsCount: number = 0; // 列数
let colsArr: number[] = []; // 列数组
let gap: number = 0; // 间距
let resizeListener: EventListener = null// resize监听

const positionComputedX = (ref: HTMLElement) => {
    grid = ref;// grid
    let gridWidth = grid.clientWidth;// grid宽度
    let marginB = 16;// 底部间距
    let gapX: number;// 间距

    for (let i of grid.children as any) {
        let min = Math.min(...colsArr);
        let index = colsArr.indexOf(min);
        let clientH = i.clientHeight as number;
        i.style.marginBottom = `${marginB}px`;
        console.log(colsArr)
        colsArr[index] += clientH + marginB;

        switch (index) {
            case 0:
                gapX = gap * (3 / 8);
                break;
            case 1:
                gapX = gap * (4 / 8);
                break;
            case 2:
                gapX = gap * (5 / 8);
                break;
            default:
                break;
        }

        if (!index) {
            i.style.transform = `translate(${index * ((gridWidth - gap) / colsCount) + gapX}px,${min}px)`;
        } else {
            i.style.transform = `translate(${index * ((gridWidth - gap) / colsCount) + gapX}px,${min}px)`;
        }
    }
    console.log(Math.max(...colsArr) + marginB)
    ref.style.height = Math.max(...colsArr) + marginB + 'px'
};

const ArgComputed = () => {
  if (window.innerWidth < 731) {
    gap = 0;
    colsArr = new Array(1).fill(0);
    colsCount = 1;
  } else if (window.innerWidth < 1280) {
    window.innerWidth < 961 ? (gap = 64) : (gap = 112);
    colsArr = new Array(2).fill(0);
    colsCount = 2;
  } else {
    window.innerWidth < 1460 ? (gap = 128) : (gap = 192);
    colsArr = new Array(3).fill(0);
    colsCount = 3;
  }
};

ArgComputed();

if(!resizeListener){
    window.addEventListener("resize", () => {
        ArgComputed();
        positionComputedX(grid);
    });
}



export default positionComputedX
