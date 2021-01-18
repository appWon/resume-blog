---
path: "http://www.naver.com"
date: "2021-01-19"
title: "인스타 기능 구현(2)"
slug: test2
---

![](https://images.velog.io/images/app235/post/5e99b569-7f83-46ad-9712-4982ee455bfe/%EB%85%B9%ED%99%94_2020_10_31_22_32_09_978.gif)

> Instagram 기능 클론(2)

### 구현할 기능

<hr>

##### 헤드에 위치한 프로필 아이콘을 클릭을 하였을 경우 밑으로 메뉴가 생성되는 기능

```html
<!--html 소스코드-->
<li>
  <div class="hearder_my_incon" onblur="focus_out(this)">
    <div class="myprofile display_none">
      <div class="nav_profile_img">
        <div></div>
        <span>프로필</span>
      </div>
      <div class="nav_saved_img">
        <div></div>
        <span>저장됨</span>
      </div>
      <div class="nav_setting_img">
        <div></div>
        <span>설정</span>
      </div>
      <div class="nav_chang_id_img">
        <div></div>
        <span>계정 전환</span>
      </div>
      <div class="nav_logout">
        <span>로그아웃</span>
      </div>
    </div>
  </div>
</li>
```

##### 밑으로 생기는메뉴는 특별한 이유 없이 li 태그가 아닌 class이름이 myprofile인 div태그 아래에 구성하였고 display:none 효과를 주는 클래스를 <br>미리 넣어 숨겨두었습니다.

##### css Code

```css
.myprofile {
  position: absolute;
  right: -2px;
  width: 230px;
  top: 45px;
  border-radius: 7px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.0975);
}

.display_none {
  display: none;
}

.my_incon_click {
  border: 1px solid black;
  border-radius: 50%;
}
```

##### javaScript Code

```javascript

const hearder_my_incon = document.querySelector('.hearder_my_incon');
hearder_my_incon.addEventListener('click',e =>{
  hearder_my_incon.classList.toggle('my_incon_click');
  document.querySelector('.myprofile').classList.toggle('display_none');
});

const focus_out = (select) =>{
  if(select.classList.contains('my_incon_click')){
    select.classList.toggle('my_incon_click');
    document.querySelector('.myprofile').classList.toggle('display_none');
}

```

##### 기능으로는 <span style="color:red;">element</span>를 <span style="color:red;">click</span> 이벤트가 발생하였을 때 아이콘이 클릭 되었다는 효과를 넣어주는 <span style="color:red;">my_incon_click</span> 클래스를 <span style="color:red;">toggle</span> 시켜 주고 <br> 숨겨진 메뉴를 다시 보여주게 하기 위해서 <span style="color:red;">display_none</span> 클래스를 <span style="color:red;">toggle</span> 시켜 주었습니다.<br>

##### 그리고 fous 아웃이 될 떄 실행되는 focus_out에 this을 자신이 focus out이 될 때 hearder_my_incon에서 toggle되었던 이벤틀를 다시 한번 더 주어 없애려고 하였습니다.

> 문제점

##### 기능적으로 보면 포커스가 있을 경우에는 메뉴가 펼쳐지고 포커스가 없어지면 닫혀진다고 생각하여 구현을 하지였지만 생각 처럼 되지않았다.

```html
<div class="hearder_my_incon" tabindex="0" onblur="focus_out(this)"></div>
```

##### 검색을 해보니 <span style="color:red;">tabindex="0"</span>을 지정해주면 <span style="color:red;">input</span> 박스처럼 효과를 낼 수 있었다.
