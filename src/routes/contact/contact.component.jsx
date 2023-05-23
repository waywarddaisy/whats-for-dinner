import './contact.styles.scss';

const Contact = ()=> {

    return (
        <div className="contact-container">
            <h1>Drop me a line!</h1>
            <form action="">
                <div className='info'>
                <label htmlFor="name">Name</label>
                <input type="text" />

                <label htmlFor="email">Email</label>
                <input type="text" />
                </div>
                <textarea name="" id="" cols="80" rows="30"></textarea>

                <button>Send</button>

            </form>
        </div>
    )
};

export default Contact;