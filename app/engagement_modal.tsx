"use client";
import ContactUsForm from "./contact_us";

export default function EnagageUs() {
    return(
        <>
        <button onClick={()=> (document.getElementById('my_modal_1') as HTMLFormElement).showModal()}
         data-modal-target="contactus" data-modal-toggle="contactus" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
             Engage us
        </button>
        <ContactUsForm/>
        </>
    );
}