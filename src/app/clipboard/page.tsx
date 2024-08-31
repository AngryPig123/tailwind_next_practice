import classes from './page.module.css'

const imageHelper = (imageName: string) => {
    return `/clipboard/images/${imageName}`;
}

export default function Clipboard() {

    console.log(classes['section-container'])


    return (
        <>
            {/* hero section */}
            <section id="hero">
                <div className={`${classes.sectionContainer} mb-40 pt-16`}>
                    <img src={imageHelper('logo.svg')} alt="" className="mx-auto my-16"/>
                    <h3 className={classes.h3}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h3>

                    <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo nihil officia
                        officiis quam qui! Alias aperiam distinctio et facilis natus nihil nostrum, officia,
                    </p>
                    {/* button container */}
                    <div
                        className={classes.buttonContainer}>

                        <a href="#"
                           className={`${classes.button} bg-strongCyan`}>
                            Download for iOS
                        </a>

                        <a href="#"
                           className={`${classes.button} bg-lightBlue`}>
                            Download for Mac
                        </a>
                    </div>
                </div>
            </section>

            {/* snippets section */}
            <section id="snippets">
                <div className={`${classes.sectionContainer} my-20`}>
                    <h3 className={classes.h3}>
                        Keep track of your snippets
                    </h3>
                    <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi earum excepturi
                        exercitationem
                        maiores perspiciatis quae repudiandae voluptatum. Cumque eum
                    </p>
                </div>
            </section>

            {/* features section */}
            <section id="features">
                <div className={`${classes.sectionContainer} my-20`}>
                    <div className="relative flex flex-col md:flex-row md:space-x-32">
                        {/* image */}
                        <div className="md:w-1/2">
                            <img
                                className='md:absolute top-0 right-[50%]'
                                alt=""
                                src={imageHelper('image-computer.png')}
                            />
                        </div>

                        {/* items container */}
                        <div
                            className="flex flex-col mt-16 md-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">

                            {/* item 1 */}
                            <div>
                                <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur
                                </p>
                            </div>

                            {/* item 2 */}
                            <div>
                                <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur
                                </p>
                            </div>

                            {/* item 3 */}
                            <div>
                                <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* access anywhere section */}
            <section id="access">
                <div className={`${classes.sectionContainer} my-20`}>
                    <h3 className={classes.h3}> Access Clipboard Anywhere </h3>
                    <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at dignissimos
                        impedit iste iure laudantium
                    </p>

                    <img
                        className='mx-auto'
                        src={imageHelper('image-devices.png')}
                        alt=""
                    />
                </div>
            </section>

            {/* supercharge section */}
            <section id="supercharge">

            </section>

        </>
    )

}
