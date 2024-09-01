import { Ride } from "@/types/ type";
import { Image, Text, View } from "react-native";

const RideCard = ({ ride: {
    destination_latitude,
    destination_longitude,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status
} }: { ride: Ride }) => {
    return (
        <View className="flex flex-row items-center justify-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
            <View className="flex flex-row items-center justify-between p-3">
                <View className="flex flex-row items-center justify-between">
                    {/* <Image source={{uri: `https://maps/`}} /> */}
                </View>
            </View>
            <Text className="text-3xl">{driver.first_name}</Text>
        </View>
    );
}

export default RideCard;
