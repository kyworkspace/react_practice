import createModalProvider from "./createModalProvider";
import DeleteModalContent from "./DeleteModalContent";

export const CONFIRM_DELETE_MODAL = "confirm_delete";
const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
};

export default createModalProvider(CONTENT_MAP);
