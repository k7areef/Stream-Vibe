import data from "@data/devices.json";
import SectionHeader from "./common/SectionHeader";
import deviceIcon1 from "@assets/icons/devices/device-icon-1.svg";
import deviceIcon2 from "@assets/icons/devices/device-icon-2.svg";
import deviceIcon3 from "@assets/icons/devices/device-icon-3.svg";
import deviceIcon4 from "@assets/icons/devices/device-icon-4.svg";
import deviceIcon5 from "@assets/icons/devices/device-icon-5.svg";
import deviceIcon6 from "@assets/icons/devices/device-icon-6.svg";

function Devices() {

    const { title, description, devicesList } = data;
    const deviceIcons = {
        1: deviceIcon1,
        2: deviceIcon2,
        3: deviceIcon3,
        4: deviceIcon4,
        5: deviceIcon5,
        6: deviceIcon6
    }

    return (
        <section className="devices py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="devices-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        devicesList.map((device, index) => (
                            <div className="device-item p-5 rounded-md border border-black-15 bg-black-06 overflow-hidden relative" key={device.id || index}>
                                <div className="device-item-overlay absolute w-full h-full left-0 top-0 bg-linear-to-bl from-red-45/10 to-transparent to-40%"></div>
                                <div className="device-item-container relative z-1">
                                    <div className="header flex items-center gap-3 mb-3">
                                        <div className="icon-container w-10 h-10 rounded-md bg-black-08 border border-black-12 flex items-center justify-center">
                                            <img src={deviceIcons[index + 1]} alt={device.title} className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-semibold text-lg sm:text-xl">{device.title}</h3>
                                    </div>
                                    <p>{device.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Devices;