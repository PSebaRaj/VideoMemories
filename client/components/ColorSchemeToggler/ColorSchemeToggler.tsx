import { ActionIcon, MantineNumberSize, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";


function ColorSchemeToggler(props: { size: Number | undefined }) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    // next to upload video button, of (default) height 35px

    return (
        <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size={(props.size as MantineNumberSize)}
        >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
    );
}

export default ColorSchemeToggler;
