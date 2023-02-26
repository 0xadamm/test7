import { Model } from "./Model";

interface ModalDataItem {
  Image: JSX.Element;
  Title: string;
  Body: string;
}

export const ModalData: ModalDataItem[] = [
  {
    Image: <Model />,
    Title: "Product Name",
    Body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    Image: <Model />,
    Title: "Product Name",
    Body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    Image: <Model />,
    Title: "Product Name",
    Body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    Image: <Model />,
    Title: "Product Name",
    Body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    Image: <Model />,
    Title: "Product Name",
    Body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
