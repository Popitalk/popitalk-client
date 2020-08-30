import React, { createRef, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faReddit,
  faSkype,
  faVk,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faAt } from "@fortawesome/free-solid-svg-icons";
import Input from "../Controls/Input";
import Button from "../Controls/Button";

export default function InviteForm({ link }) {
  const faClassName = "text-xl";
  const ref = createRef();

  const copyHandler = () => {
    ref.current.select();
    ref.current.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };

  const InputRef = forwardRef((props, ref) => {
    return (
      <Input
        value={link}
        readOnly={true}
        interiorButton={
          <Button
            actionButton
            size="sm"
            onClick={copyHandler}
            analyticsString="Copy Button: InviteForm"
          >
            Copy
          </Button>
        }
        forwardedRef={ref}
      />
    );
  });

  InputRef.displayName = "InputRef";

  return (
    <>
      <div className="flex flex-col items-center pb-4">
        <p variant="text1">Copy and share this link!</p>
      </div>
      <InputRef ref={ref} />
      <div className="flex justify-center space-x-1 pt-4">
        <FontAwesomeIcon icon={faFacebookSquare} className={faClassName} />
        <FontAwesomeIcon icon={faWhatsapp} className={faClassName} />
        <FontAwesomeIcon icon={faPaperPlane} className={faClassName} />
        <FontAwesomeIcon icon={faAt} className={faClassName} />
        <FontAwesomeIcon icon={faVk} className={faClassName} />
        <FontAwesomeIcon icon={faSkype} className={faClassName} />
        <FontAwesomeIcon icon={faTwitter} className={faClassName} />
        <FontAwesomeIcon icon={faReddit} className={faClassName} />
      </div>
    </>
  );
}
