import Noty, { Options } from 'noty'
import 'noty/lib/noty.css'
import 'noty/lib/themes/metroui.css'

// @ts-ignore: mojs no ts
// import { Timeline, Html, Shape, Burst } from '@mojs/core'

function props(burstColor: string): Options {
  return {
    // animation: {
    //   open: function (promise: any) {
    //     var n: any = this
    //     var Timeline: any = new Timeline()
    //     var body = new Html({
    //       el: n.barDom,
    //       x: { 500: 0, delay: 0, duration: 500, easing: 'elastic.out' },
    //       isForce3d: true,
    //       onComplete: function () {
    //         promise(function (resolve: any) {
    //           resolve()
    //         })
    //       },
    //     })

    //     var parent = new Shape({
    //       parent: n.barDom,
    //       width: 200,
    //       height: n.barDom.getBoundingClientRect().height,
    //       radius: 0,
    //       x: { 150: -150 },
    //       duration: 1.2 * 500,
    //       isShowStart: true,
    //     })

    //     n.barDom.style['overflow'] = 'visible'
    //     parent.el.style['overflow'] = 'hidden'

    //     var burst = new Burst({
    //       parent: parent.el,
    //       count: 16,
    //       top: n.barDom.getBoundingClientRect().height + 75,
    //       degree: 90,
    //       radius: 80,
    //       angle: { [-90]: 40 },
    //       children: {
    //         fill: burstColor,
    //         delay: 'stagger(500, -50)',
    //         radius: 'rand(8, 25)',
    //         direction: -1,
    //         isSwirl: true,
    //       },
    //     })

    //     var fadeBurst = new Burst({
    //       parent: parent.el,
    //       count: 2,
    //       degree: 0,
    //       angle: 75,
    //       radius: { 0: 100 },
    //       top: '80%',
    //       children: {
    //         fill: burstColor,
    //         pathScale: [0.65, 1],
    //         radius: 'rand(12, 15)',
    //         direction: [-1, 1],
    //         delay: 0.8 * 500,
    //         isSwirl: true,
    //       },
    //     })

    //     Timeline.add(body, burst, fadeBurst, parent)
    //     Timeline.play()
    //   },
    //   close: function (promise: any) {
    //     var n: any = this
    //     new Html({
    //       el: n.barDom,
    //       x: { 0: 500, delay: 10, duration: 500, easing: 'cubic.out' },
    //       skewY: { 0: 10, delay: 10, duration: 500, easing: 'cubic.out' },
    //       isForce3d: true,
    //       onComplete: function () {
    //         promise(function (resolve: () => void) {
    //           resolve()
    //         })
    //       },
    //       theme: 'metroui',
    //     }).play()
    //   },
    // },
    theme: 'metroui',
    closeWith: ['click', 'button'],
  }
}

const timeout = 5000

function success(text: string) {
  new Noty({
    text,
    timeout,
    type: 'success',
    ...props('#477d11'),
  }).show()
}

function error(text: string) {
  new Noty({
    text,
    timeout,
    type: 'error',
    ...props('#ff0000'),
  }).show()
}

function warning(text: string) {
  new Noty({
    text,
    timeout,
    type: 'warning',
    ...props('#ffc107'),
  }).show()
}

function info(text: string) {
  new Noty({
    text,
    timeout,
    type: 'info',
    ...props('#2196f3'),
  }).show()
}

function alert(text: string, timeout: number = 0) {
  new Noty({
    text,
    timeout,
    type: 'alert',
    ...props('#ffc107'),
  }).show()
}

export default Noty
export { success, error, warning, info, alert }
