import { Toaster } from "react-hot-toast";

export default function ConfiguredToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 2000,
        // custom: {
        //   style: { background: "#FDF5EC", color: "black" },
        //   icon: <span style={{ color: "#ED9B40" }}>&#9888;</span>,
        // },
        success: {
          style: {
            background: "#EFF9F6",
            color: "black",
          },
        },
        error: {
          style: {
            background: "#FBECED",
          },
        },
      }}
    />
  );
}
