export default {
  // vnode объект виртуального дерева, гду будет хранится наша директива
  // bindings and vnode только для чтения
  // первый жизненый этап которую встречает директива - метод bind. В данном методе инициализируем директиву, и она прикрепляется
  // к этементу уже внутри ДОМ дерева, но при этом эта директива еще не находится внутри реального ДОМ дерева.
  bind(el, bindings, vnode) {
    //console.log('bind');
    //el.style.color = 'grey'

    //el.style.color = bindings.value

    const arg = bindings.arg
    el.style[arg] = bindings.value

    // свойства переданных модификаторов хранятся в переменной bindings
    const fontModifier = bindings.modifiers['font']
    let delay = 0;
    if (fontModifier) {
      delay = 2000;
      //el.style.fontSize = '30px'
    }
    setTimeout(()=>{
      el.style.fontSize = '30px'
    }, delay)
  },

/*
  // для того чтобы это понять существует следующий жизненый этап - inserted
  inserted(el, bindings, vnode) {
    console.log('inserted');
  },
  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },
  // вызывается когда дериктива прекращает свое существование
  unbind() {
    console.log('unbind')
  }
*/
}




