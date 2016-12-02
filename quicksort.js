/*
* 一个快速排序算法的实现
*思想：
*1、在一个数组集合中选择一个元素作为基准。
*2、所有小于基准的元素，都移动到基准左边，所有大小基准的元素都移动到基准右边。
*3、对基准作用两边的子集不断重复第一步和第二步，知道所有子集只剩下一个元素为止。
*/
var quicksort = function (arr){

    if(arr.length <= 1){
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];

    for(var i=0 ;i<arr.length;i++){
        if(arr[i] < pivot){
          left.push(arr[i]);
        }else{
          right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot,quicksort(right));
}
