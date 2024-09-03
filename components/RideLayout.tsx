import { useRef } from "react";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { icons } from "@/constants";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

import Map from "./Map";

const RideLayout = ({ title, snapPoints, children }: { title: string; snapPoints: string[], children: React.ReactNode }) => {
    const bottomSheetRef = useRef<BottomSheet>(null)

    return (
        <GestureHandlerRootView>
            <View className="flex-1 bg-white">
                <View className="flex flex-col h-screen bg-blue-500">
                    <View className="absolute z-10 flex flex-row items-center justify-start px-5 top-16">
                        <TouchableOpacity onPress={() => router.back()}>
                            <View>
                                <Image
                                    source={icons.backArrow}
                                    resizeMode="contain"
                                    className="w-6 h-6"
                                />
                            </View>
                        </TouchableOpacity>
                        <Text className="ml-5 text-xl font-JakartaBold">
                            {title || 'Go back'}
                        </Text>
                    </View>
                    <Map />
                </View>
                <BottomSheet
                    index={0}
                    ref={bottomSheetRef}
                    snapPoints={snapPoints || ['50%', '85%']}
                    keyboardBehavior="extend"
                >
                    <BottomSheetView style={{ flex: 1, padding: 20 }}>
                        {children}
                    </BottomSheetView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default RideLayout;
