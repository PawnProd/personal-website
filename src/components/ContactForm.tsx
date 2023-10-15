import React from 'react';
import Button from './Button';
import {RiSendPlaneFill} from 'react-icons/ri';

const ContactForm = () => {
    return <form class="stack">
        <input
            type="email"
            required
            placeholder="Votre Email"
        />
        <input
            type="text"
            required
            placeholder="Sujet"
        />
        <textarea
        placeholder="Votre message..."
        rows={10}
        />
        <div class="flex-group fullwidth mx-end">
        <Button variant="contained"> Envoyer <RiSendPlaneFill size={30} className="ml-3" /> </Button>
        </div>
    </form>
}

export default ContactForm;