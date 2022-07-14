import {
    Modal,
    Button,
    Group,
    Text,
    Progress,
    TextInput,
    Stack,
    Switch,
} from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { ArrowBigUpLine } from "tabler-icons-react";
import { useMutation } from "react-query";
import { updateVideo, uploadVideo } from "../../api";
import { useForm } from "@mantine/hooks";
import { Video } from "../../types";
import { AxiosError, AxiosResponse } from "axios";
import {useVideo} from "../../context/videos";

function UploadVideo() {
    const [opened, setOpened] = useState(false);
    const [progress, setProgress] = useState(0);

    const mutation = useMutation(uploadVideo);

    const config = {
        onUploadProgress: (progressEvent: any) => {
            const percent = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
            );

            setProgress(percent);
        },
    };

    function upload(files: File[]) {
        const formData = new FormData();

        formData.append("video", files[0]);
        mutation.mutate({ formData, config });
    }

    return (
        <>
            <Modal
                closeOnClickOutside={true}
                onClose={() => setOpened(false)}
                opened={opened}
                title="Upload Video"
                size="xl"
            >
                {progress === 0 && (
                    <Dropzone
                        onDrop={(files) => {
                            upload(files);
                        }}
                        accept={[MIME_TYPES.mp4]}
                        multiple={false}
                    >
                        {(status) => {
                            return (
                                <Group
                                    position="center"
                                    spacing="xl"
                                    style={{
                                        minHeight: "25vh",
                                        justifyContent: "center",
                                    }}
                                    direction="column"
                                >
                                    <ArrowBigUpLine />
                                    <Text>Drop Video or Click to Find</Text>
                                </Group>
                            );
                        }}
                    </Dropzone>
                )}

                {progress > 0 && (
                    <Progress
                        size="xl"
                        label={`${progress}%`}
                        value={progress}
                        mb="xl"
                    />
                )}

                {mutation.data && (
                    <EditVideoForm
                        setOpened={setOpened}
                        videoId={mutation.data.videoId}
                    />
                )}
            </Modal>

            <Button onClick={() => setOpened(true)}>Upload Video</Button>
        </>
    );
}

// move to another file
function EditVideoForm({
    videoId,
    setOpened,
}: {
    videoId: string;
    setOpened: Dispatch<SetStateAction<boolean>>;
}) {
	// refetch after update
	const { refetch } = useVideo();

    const form = useForm({
        initialValues: {
            title: "",
            description: "",
            published: true,
        },
    });

    const mutation = useMutation<
        AxiosResponse<Video>,
        AxiosError,
        Parameters<typeof updateVideo>["0"]
    >(updateVideo, {
        onSuccess: () => {
            setOpened(false);
			refetch();
        },
    });

    return (
        <form
            onSubmit={form.onSubmit((values) => {
                mutation.mutate({ videoId, ...values });
            })}
        >
            <Stack>
                <TextInput
                    label="Title"
                    placeholder="Title:"
                    required
                    {...form.getInputProps("title")}
                />
                <TextInput
                    label="Description"
                    placeholder="About the video..."
                    required
                    {...form.getInputProps("description")}
                />
                <Switch
                    label="Published"
                    {...form.getInputProps("published")}
                />
                <Button type="submit">Upload</Button>
            </Stack>
        </form>
    );
}

export default UploadVideo;
