let price = 25000

function priceTotal(cnt){
 let Total = cnt * price
 $(".price").text(Total.toLocaleString() + "원")
 //.toLocaleString() >>숫자를 문자로 변환
}
// 플러스를 클릭했을 때,
$("#plus").click(function(){
//숫자가 1씩 증가
 // num에 있는 텍스트를 불러옴(문자).
// 숫자로 변환 >> parseInt()
// 숫자로 변환한 값을 변수에 담기
let plusNum = parseInt($("#num").text())
plusNum++
$("#num").text(plusNum)
priceTotal(plusNum)
})

// 마이너스를 클릭했을 때
$("#minus").click(function(){
 let minusNum = parseInt($("#num").text())
 if(minusNum > 1){
 minusNum--
 $("#num").text(minusNum)
 priceTotal(minusNum)
}
})

// thumb를 클릭했을 때,
// 배경색상 검정, i태그는 흰색, span태그 흰색, span태그의 텍스트 +1
/*
$(".thumb").click(function(){
 $(this).css("background","#000000")
 $(this).find("i").css("color","#ffffff")
 $(this).find("span").css("color","#ffffff")
 //find() >> 아래있는 태그를 찾을 때 사용하는 함수
 let thumbCnt = parseInt($(this).find(".cnt").text())
 thumbCnt++
 $(this).find(".cnt").text(thumbCnt)
}) 
 */
// 한개의 태그에 두개의 효과를 내는것을 toggle이라고 함.
$(".thumb").click(function(){
 let like = $(this).data("clicked")
 if(like){
  $(this).css("background","#ffffff")
  $(this).find("i").css("color","#000000")
  $(this).find("span").css("color","#000000")
  //find() >> 아래있는 태그를 찾을 때 사용하는 함수
  let thumbCnt = parseInt($(this).find(".cnt").text())
  $(this).find(".cnt").text(thumbCnt-1)
 }else{
  $(this).css("background","#000000")
  $(this).find("i").css("color","#ffffff")
  $(this).find("span").css("color","#ffffff")
  //find() >> 아래있는 태그를 찾을 때 사용하는 함수
  let thumbCnt = parseInt($(this).find(".cnt").text())
  $(this).find(".cnt").text(thumbCnt+1)
 }
 $(this).data("clicked",!like)
 //! > 부정문 
 //data("clicked",!like) >> 클릭되지 않은상태
})

// 리뷰 버튼 활성화
$(".review_btn button").click(function(){
 $(".review_btn button").removeClass("active_btn")
 $(this).addClass("active_btn")
})