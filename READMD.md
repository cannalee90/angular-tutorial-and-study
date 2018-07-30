# Angular Tutorial 모음집

앵귤러 프로젝트를 튜토리얼을 따라해보고 더 공부해야할 점이 있으면 공부해보자

### Component Template

#### Displaying Data

- `ngFor` `ngIf` 문법
- 변수를 선언할때 혹은 `constrcutor`에서 타입 및 초기값 지정 가능

```
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

export class Hero {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

위 코드와 아래의 코드는 같다. 위 코드는 아래 기능이 구현된 shorcut이다..

- 생성자 매개변수와 타입을 선언 (Declares a constructor parameter and its type.)
- 같은 이름의 퍼블릭 속성을 선언 (Declares a public property of the same name.)
- 인스턴스가 새롭게 생성될때 해당되는 이름을 가지고 있는 인자를 초기화 (Initializes that property with the corresponding argument when creating an instance of the class.)

### Template Syntax

#### Interpolation

- `{{}}`은 `template expression`으로써 앵귤러가 첫번째로 실행한해서 그 값을 스트링으로 해서 템플릿에 바인딩하게 된다.(directive와 element에 모두 해당)

#### template expression

- template expression은 값을 만들어서 타겟에 바인딩한다.(HTML, component, directive)
- 대부분의 자바스크립트 문법을 사용할 수 있지만 사이드 이펙트를 생성할 수 있는 문법은 허용되지 않는다.
  - assignments (=, +=, -=, ...)
  - new
  - chaining expressions with ; or ,
  - increment and decrement operators (++ and --)
  - Other notable differences from JavaScript syntax include:
  - no support for the bitwise operators | and &
  - new template expression operators, such as |, ?. and !.
- template syntax에 context는 컴포넌트의 인스턴스 컨텍스트 혹은 템플릿의 컨텍스트이다.
- template expression에서의 context는 `template variables` `directive's context object` 그리고 `component's members`가 혼합된 상태이기 때문에 나열된 순서대로 우선순위가 있다.
- tempalte expression은 global namespace에서 아무것도 참조할 수 없다. `console.log` `Math.max`와 같은 함수를 사용할 수 없고, 자기만의 context만을 참조할 수 있습니다.

#### Template Expression guideline

1. ***No visible Side effect***
  - template expression은 타겟 속성 이외의 어떠한 어플리케션의 상태를 바꿔서는 안됩니다. 이 룰은 앵귤러의 `unidirectional data flow` 정책에 중요한 점입니다.

2. ***Quick execution***
  - change detection cycle마다 template expression이 실행되기 때문에, 빠르게 실행되어야 합니다.

3. ***Simplicity***
  - 복잡한 비지니스 로직이나 수식을 사용해서는 안됩니다.

4. ***Idempotence***
  - 앵귤러에서는 `idempotent expression`에 의미는 dependent value가 바뀌지 않는한 언제나 동일한 리턴을 내보내는 것을 말합니다. Dependent values should not change during a single turn of the event loop. If an idempotent expression returns a string or a number, it returns the same string or number when called twice in a row. If the expression returns an object (including an array), it returns the same object reference when called twice in a row.

#### Template statements
