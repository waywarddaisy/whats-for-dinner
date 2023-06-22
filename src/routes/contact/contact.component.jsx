import './contact.styles.scss';

const Contact = () => {

    return (
        <div className="contact-container">
            <h1>Drop me a line!</h1>
            <form action="https://formsubmit.co/jenna@waywarddaisy.com" method="POST" class="letter">
                <div className='text-area-container'>
                    <div className='info'>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"/>
                    </div>

                    <textarea name="" id="" cols="80" rows="30"></textarea>
                </div>

                <button type="sumit" className="large-button letter">Send</button>

            </form>
        </div>
    )
};

export default Contact;