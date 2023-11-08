import QRCode from "react-qr-code";
import Cookies from "js-cookie";
const CreateQRCode = () => {
  let value = Cookies.get("loginEmail");
  value = value.split("@")[0];
  value = `${value}-present-${Date.now()}`;

  return (
    <div>
      <QRCode title="QRCode" value={value} size={500} />
    </div>
  );
};

export default CreateQRCode;
