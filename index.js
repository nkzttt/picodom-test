import $ from 'jquery';
import { h, patch } from 'picodom';

const state = {
  apple: 0,
  pear: 0,
  grape: 0
};

let node;

function render() {
  patch(node, (node = view(state)), $('#result')[0]);
}

function view(state) {
  let result = state.apple + state.pear + state.grape;
  return h('div', null, null, [
    h('p', null, `概算：${result}円`),
    h('p', null, `（内訳：りんご - ${state.apple}円、なし - ${state.pear}円、ぶどう - ${state.grape}円、）`)
  ]);
}

render();

$('[type="number"]').on('change', (e) => {
  state[e.currentTarget.name] = e.currentTarget.value * e.currentTarget.dataset.price;
  render();
});
