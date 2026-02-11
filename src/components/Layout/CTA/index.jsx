import background from "@assets/cta-bg.png";
import Button from "@components/UI/Button";

function CTA() {
    return (
        <div className="cta py-5 md:py-10">
            <div className="container">
                <div className="content-wrapper rounded-3xl border border-black-15 relative overflow-hidden">
                    <img src={background} alt="Background" className="min-h-50 object-cover" />
                    <div className="content-overlay p-5 md:p-10 flex max-md:flex-col md:items-center gap-5 md:gap-10 absolute left-0 top-0 w-full h-full z-10 bg-linear-to-r from-[#0F0F0F] to-red-45/30">
                        <div className="text-wrapper w-full">
                            <h2 className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3">Start your free trial today!</h2>
                            <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                        </div>
                        <Button
                            className="text-nowrap"
                        >
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;