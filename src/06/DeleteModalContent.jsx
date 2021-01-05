import React from "react";
import Button from "../04/Button";
import Text from "../04/Text";
import { Consumer } from "./ModalContext";

export default function DeleteModalContent({ id, name }) {
  //props 추가
  return (
    <Consumer>
      {/* render 프로퍼티 패턴으로 소비자에 Button 컴포넌트를 연결해줌 */}
      {({ closeModal }) => (
        <div>
          <div>
            <Text>{name}을 정말 삭제하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={closeModal}>닫기</Button>
        </div>
      )}
    </Consumer>
  );
}
