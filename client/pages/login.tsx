import {
    Button,
    Container,
    Paper,
    PasswordInput,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { showNotification, updateNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { loginUser } from "../api";

function LoginPage() {
    const router = useRouter();

    const form = useForm({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const mutation = useMutation<
        string,
        AxiosError,
        Parameters<typeof loginUser>["0"]
    >(loginUser, {
        onMutate: () => {
            showNotification({
                id: "login",
                title: "Logging in",
                message: "Please wait...",
                loading: true,
            });
        },
        onSuccess: () => {
            updateNotification({
                id: "login",
                title: "Logged in",
                message: "Success!",
            });

            router.push("/");
        },
        onError: () => {
            updateNotification({
                id: "login",
                title: "Error",
                message: "Failed to log in. Please try again.",
            });
        },
    });

    return (
        <>
            <Head>
                <title>Login User</title>
            </Head>
            <Container>
                <Title>Login</Title>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form
                        onSubmit={form.onSubmit((values) =>
                            mutation.mutate(values)
                        )}
                    >
                        <Stack>
                            <TextInput
                                label="Email"
                                placeholder="Enter email:"
                                required
                                {...form.getInputProps("email")}
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Enter password:"
                                required
                                {...form.getInputProps("password")}
                            />
                            <Button type="submit">Login</Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </>
    );
}

export default LoginPage;
