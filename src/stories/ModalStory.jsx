import React from "react";
import { storiesOf } from "@storybook/react";

import Modal from "../06/Modal";
import Button from "../04/Button";
import Text from "../04/Text";
import ButtonWithModal from "../06/ButtonWithModal";

storiesOf("Modal", module)
  .addWithJSX("기본 설정", () => (
    <Modal>
      <div>
        <Text>정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .addWithJSX("ButtonWithModal", () => <ButtonWithModal />);
