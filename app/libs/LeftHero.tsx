import styles from '../styles/Home.module.css'
import { ReactElement, useState, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import DHNavbar from "../navbar";
import Icon from '../dhl';
export default function LeftSide() {
    return <div className={styles.column}>
        <div className={styles.title}>
            Fun and Scalable<br/>
        </div>
        <div className={styles.subtitle}>
        Are you ready to revolutionize the way you engage with gaming and wagering? We are thrilled to introduce our groundbreaking wager gamification technology, and we invite you to be among the first to experience its unparalleled excitement and innovation.
        </div>
        <div className={styles.title}>
        <span className={styles.titleKeyword}>Join waitlist</span>
        </div>
        <Form/>
    </div>
}
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
    return <form className={styles.formWrapper} onSubmit={submit}>
        
        <input type="email" required placeholder="Email"
               className={[styles.formInput, styles.formTextInput].join(" ")}
               value={email} onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit" className={[styles.formInput, styles.formSubmitButton].join(" ")}>
            Contact Us
        </button>
        <input type="text" placeholder='Short message'
        />
        
        {error ? <div className={styles.error}>{error}</div> : null}
    </form>
}
