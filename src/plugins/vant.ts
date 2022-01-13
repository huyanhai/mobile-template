import type { App } from 'vue';
import {
  Button,
  ActionSheet,
  Checkbox,
  Picker,
  NavBar,
  Icon,
  Popup,
  Dialog,
  Field,
  NumberKeyboard,
  PasswordInput,
  RadioGroup,
  Radio,
  PullRefresh,
  Loading,
  Sticky,
  Form,
  Switch,
} from 'vant';

import 'vant/lib/index.css';

export function setupVant(app: App) {
  app.component(Button.name, Button);
  app.component(ActionSheet.name, ActionSheet);
  app.component(Checkbox.name, Checkbox);
  app.component(Picker.name, Picker);
  app.component(NavBar.name, NavBar);
  app.component(Icon.name, Icon);
  app.component(Popup.name, Popup);
  app.component(Dialog.name, Dialog);
  app.component(Field.name, Field);
  app.component(NumberKeyboard.name, NumberKeyboard);
  app.component(PasswordInput.name, PasswordInput);
  app.component(RadioGroup.name, RadioGroup);
  app.component(Radio.name, Radio);
  app.component(PullRefresh.name, PullRefresh);
  app.component(Loading.name, Loading);
  app.component(Sticky.name, Sticky);
  app.component(Form.name, Form);
  app.component(Switch.name, Switch);
}
