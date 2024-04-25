import styles from "./styles/Home.module.css";
{/* Open the modal using document.getElementById('ID').showModal() method */}
import { ReactElement, useState, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
const ContactUsForm = () => {

  return (
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg text-center">Hello!</h3>
      <p className="py-4 font-semibold">Please fill out your email address with query and we will get back to you asap.</p>
      <div className="modal-action">
        <Form/>
      </div>
      <p >Press ESC key or click the button below to close</p>
    </div>
  </dialog>
  );
};

function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        let response = await fetch("/api/waitlist", {
            method: "POST",
            body: JSON.stringify({email: email})
        })
        if (response.ok) {
            setHasSubmitted(true);
        } else {
            setError(await response.text())
        }
    };
    // If the user successfully submitted their email,
    //   display a thank you message
    if (hasSubmitted) {
        return <div className={styles.formWrapper}>
            <span className={styles.subtitle}>
                Thanks for signing up! We will be in touch soon.
            </span>
        </div>
    }

    // Otherwise, display the form
    return <form method="dialog" className={styles.formWrapper} onSubmit={submit}>
        
        <input type="email" required placeholder="Email"
               className={[styles.formInput, styles.formTextInput].join(" ")}
               value={email} onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit" className={[styles.formInput, styles.formSubmitButton].join(" ")}>
            Submit 
        </button>
        {error ? <div className={styles.error}>{error}</div> : null}
    </form>
}
export default ContactUsForm;