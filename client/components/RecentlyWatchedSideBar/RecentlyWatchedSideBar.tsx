import { Navbar } from "@mantine/core";

function RecentlyWatchedSideBar() {
    return (
        // TODO: get watch history and serve as cards (maybe VideoPreview)
        <Navbar width={{ base: 200 }} height={500} p="xs">
            Recently Watched:
        </Navbar>
    );
}

export default RecentlyWatchedSideBar;
