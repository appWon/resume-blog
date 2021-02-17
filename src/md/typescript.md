---
date: "2021-02-16"

title: "Type script interface vs type alias 누가 승자일까?"

slug: "Type_script_1"

description: "Type script interface vs type 누가 승자일까?"

category: ["Javascript", "Typescript"]

tumnail: "https://images.velog.io/images/app235/post/39ee4f80-6c1e-4ee6-addf-08eb0ba26212/image.png"
---

![](https://images.velog.io/images/app235/post/39ee4f80-6c1e-4ee6-addf-08eb0ba26212/image.png)

TypeScript는 Javascript를 사용하는 많은 사람들이 사용할 만큼 많이 사용을 하고 있다. 그래서 이번에는 TypeScript를 gatsby에 사용하려고 한다. 하지만 TypeScript를 적용하기전에 우선 어떻게 사용하는지를 알아야 하는데 배움의 과정에서 interface와 type이라는 이 두 단어에서 막혔다.

```typescript
interface PersonInterface {
  name: string
  age: number
}

type PersonTypeAlias = {
  name: string
  age: number
}
```

이렇게 두가지의 형태로 타입을 지정을 할 수 있다. 기존의 자바스크립트에서는 타입에 있어서 관대 했지만 오히려 독이 되어 TypeScript가 나왔다고 한다.

그러면 타입을 지정하는 방법이 하나만 있으면 되는데 왜 ??!!! 2가지나 나와서 해깔리게 할까?? interface와 type alias 이 두개는 자신만의 특징을 가지고 있고, 이게 무엇인지 알아보기 위해서 이렇게 블로그로 남겨본다.

### Declaration _Merging_ - interface

Interface에서는 같은 이름을 여러번 사용해도 된다. 같은 이름으로 여러번 사용하게 되면 해당 이름으로 타입들이 누적으로 추가가 된다.

```typescript
interface AppleInterface {
  name: string
  prcie?: number
}

interface AppleInterface {
  color: string
}

const macBook: AppleInterface = {
  name: "macbook14",
  color: "red",
}
```

### Union Type - type alias

여러개의 타입 중 하나 일 경우에 사용한다.

```typescript
interface Mac {
  name: string
}

interface Price {
  price: number
}

interface Color {
  color: string
}

type iphone = Mac | Price | Color

//interface에서는 이 기능을 사용할 수 없다.
```

### intersection Type - 공통

여러개의 type을 조합을 해서 사용하는 방법이다. type aliasㅇ에서 & 만 사용하면 다로 상속하지 않아도 간단하게 사용할 수 있는 편리함이 있다.

```typescript
interface Mac {
  name: string
}

interface Price {
  price: number
}

type NoteBookTypeAlias = Mac & Price
interface IphoneInterface extends Mac, Price {}

const macBook: NoteBookTypeAlias = {
  name: "macBook13",
  price: 2000000,
}

const iphone: IphoneInterface = {
  name: "iphon12",
  price: 1500000,
}

const macBook: Mac & Price = {
  name: "macBook13",
  price: 2000000,
}
```

결론 : Interface , Type alias 둘 중 하나만 사용하기 보다는 타입을 지정할 때는 확장성이 좋은 Interface를 사용하고 union 같이 복수개의 타입에 관해서는 type alias 를 사용하는게 좋지 않을까 하는 생각이다.
