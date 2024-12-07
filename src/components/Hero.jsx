import LinkButton from './containers/LinkButton';

const Hero = () => {

    return (
        <div className="bg-background-image bg-cover text-white bg-black md:rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-end lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="flex flex-col justify-center md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[85%] p-6 mt-16 lg:mt-0 sm:p-0">
                    <h1 className="lg:text-6xl text-4xl mt-5 font-space md:px-6 font-medium">
                        We have simplified the concept of Blockchain and are making it accessible to everyone
                    </h1>
                    <p className="lg:text-base md:px-6 my-6 font-inter font-normal">
                        Keep doing the same things, differently!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 px-6">
                        {['Pre Sale', 'Launch Demo Dex', '6Sense Health Longevity Chain'].map((link) => (
                            <LinkButton text={link} variant='light' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
