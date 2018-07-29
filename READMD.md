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



### Dependency Injection

#### The Dependency Injection pattern

본문은 DI 패턴에 대한 자세한 설명으로 이루어져 있다. 요약하자면 아래와 같다.

앵귤러는 DI 패턴을 기반으로 만들어져 있다. DI 패턴을 사용하게 되면 객체간의 결합도를 줄여주고, 테스트를 좀 더 명확하게 할 수 있다. 아래의 글을 참고해 보자

http://blog.jeonghwan.net/js/2017/02/17/dependency-injection.html
https://angular.io/guide/dependency-injection-pattern

#### Angular Dependency Injection

#### Injectable

`@Injectable` 데코레이터를 사용해서 클래스를 의존성 주입에 사용할 수 있게 한다. 

```js
import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.

  providedIn: 'root',
})
export class HeroService {
  getHeroes() { return HEROES; }
}
```

#### Injectors

`@Injectable` 데코레이터를 사용한 서비스(클래스)라도 어디서 어떻게 이 서비스를 사용하고 생성할지를 알려줘야 한다. `Provider`를 사용해서 이러한 설정을 할 수 있고, 여러가지 방법으로 Provider를 설정할 수 있다.

#### @Injectable providers

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() { }
}
```

`@Injectable` 데코레이터는 어떠한 서비스를 주입할 것인지, 혹은 어디에 주입해야할지를 알아볼 수 있게 한다. `providedIn`이라는 속성을 통해서 앵귤러에게 어떤 인젝터가 서비스를 생성할지를 정하게 된다. `lazily-loaded context`와 같은 상황에서는 굳이 root Injector에서 주입할 필요가 없기 때문에, 인젝터를 따로 설정할 수도 있다.

##### @NgModule providers

모듈 파일에서 `providers`를 설정할 수 있다.

##### @Component providers

컴포넌트에서도 `providers`를 설정할 수 있다.

##### @Injectable, @NgModule or @Component?

서비스의 `provider`를 어떻게 설정할지에 대해서는 번들 사이즈와 서비스 스코프 그리고 서비스의 라이프타임에 따라 달라진다. 

`@Injectable` 데코레이터를 사용하게 되면 필요 없는 서비스를 트리쉐이킹 작업에서 제거할 수 있게 되어서 번들 사이즈를 줄일 수 있다.

Angular module providers에서 root injector를 사용해서 등록할 경우, 하나의 인스턴스로 모든 앱에서 해당 서비스를 사용할 수 있게 된다. 이때 모든 앱에서 하나의 인스턴스를 공유하게 된다.

> To be precise, Angular module providers are registered with the root injector unless the module is lazy loaded. In this sample, all modules are eagerly loaded when the application starts, so all module providers are registered with the app's root injector.

Component's provider를 사용할 경우, 서비스의 lifetime이 컴포넌트의 lifetime과 동일하게 된다. 즉 컴포넌트가 destroy되면 서비스도 destroy된다.

#### Providers

인젝터는 providers에 의존해서 서비스를 생성하게 된다. 반드시 providers에 서비스를 등록해야 서비스를 생성할 수 있다.

```js
providers: [Logger]
```

보통 위와같은 방법으로 서비스를 등록하게 된다. 위 방법은 가장 기본적인 방법이고 다양한 방법으로 provider를 설정할 수 있다.

##### The provide object literal

```js
providers: [Logger]
```

```js
[{ provide: Logger, useClass: Logger }]
```

위 방법은 아래방법의 shorthand expression 방식이다. 첫번째 프로퍼티는 provider에 등록할 key이고 두번째는 실제로 어떠한 클래스를 사용해서 그 서비스를 만들지에 대한 프로퍼티 이다.

###### Alternative class providers

```js
[{ provide: Logger, useClass: BetterLogger }]
```

만약 동일한 이름의 서비스로 등록하고 싶지만 다른 클래스를 사용해서 만들고 싶다면 위와 같이 등록하면 된다.

###### Aliased class providers

만약 `OldLogger`라는 서비스에 의존성이 있는 컴포넌트에서 코드를 수정하지 않고 `OldLogger` 대신 `NewLogger`라는 서비스를 사용하려면 아래와 같이 설정할 수 있다. 

```js
[ NewLogger,
  // Alias OldLogger w/ reference to NewLogger
  { provide: OldLogger, useExisting: NewLogger}]
```

```js
[ NewLogger,
  // Not aliased! Creates two instances of `NewLogger`
  { provide: OldLogger, useClass: NewLogger}]
```

위와 같은 방법은 두개의 인스턴스를 만들기 때문에 적절한 방법이 아니다.

##### Value providers

```js
// An object in the shape of the logger service
export function SilentLoggerFn() {}

const silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: SilentLoggerFn
};

[{ provide: Logger, useValue: silentLogger }]
```

위와 같은 방법으로 class의 인스턴스 말고도, 단순 오브젝트도 의존성 주입을 할 수 있게된다.

#### Factory providers

의존성이 있는 값을 동적으로 결정하기 위해서는 factory provider라는 방식을 사용한다. 예를 들어서 설명해보자. 만약 `HeroService`가 secret heroes를 일반 유저에서 숨기고 권한이 있는 유저에게만 볼 수 있게 하려면 단순히 `HeroService`에게 `UserService`를 주입할 수 없다. `HeroService`는 `UserService`에 직접적으로 접근할 수 없고 `boolean` 값을 생성자에서 받는다고 하자.

hero.service.ts (excerpt)
```js
constructor(
  private logger: Logger,
  private isAuthorized: boolean) { }

getHeroes() {
  let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
  this.logger.log(`Getting heroes for ${auth} user.`);
  return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
}
```

`Logger`를 주입할 수는 있지만 `isAuthorized`를 주입할 수 없다고 할때 factory provider를 사용해서 `HeroService`의 인스턴스를 생성해야 한다.

hero.service.provider.ts (exerpt)
```js
let heroServiceFactory = (logger: Logger, userService: UserService) => {
  return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  };
```

컴포넌트에서는 아래와 같이 사용할 수 있다.

```js
import { Component }          from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';
 
@Component({
  selector: 'app-heroes',
  providers: [ heroServiceProvider ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesComponent { }
```


##### Tree-shakable providers

Tree shaking은 어플리케이션에서 참조되지 않는 코드를 제거하는 능력이다. 이를 통해서 번들 사이즈를 유의미하게 줄일 수 있다. 이상적으로 만약 어플리케이션이 서비스를 주입하지 않는다면 번들에서 해당 코드는 포함되지 않아야 한다. 하지만 앵귤러의 빌드타임에서는 