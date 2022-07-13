import argon2 from "argon2";
import { getModelForClass, prop, pre } from "@typegoose/typegoose";

@pre<User>("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        // hash pass if new or changed
        const hash = await argon2.hash(this.password);

        this.password = hash;
        return next();
    }
})
export class User {
    // User: username, email, password
    @prop({ required: true, unique: true })
    public username: string;

    @prop({ required: true, unique: true })
    public email: string;

    @prop({ required: true })
    public password: string;

    public async comparePassword(password: string): Promise<boolean> {
        // compare password to stored (hashed) password
        return await argon2.verify(this.password, password);
    }
}

export const UserModel = getModelForClass(User, {
    schemaOptions: {
        timestamps: true,
    },
});
