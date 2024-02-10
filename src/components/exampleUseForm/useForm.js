import { useForm } from "react-hook-form";
import '../css/index.css';
const UseForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    console.log(errors)
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    type="text"
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Name required'
                        }
                    })}
                />
                {
                    errors.name && <span>{errors.name.message}</span>
                }
                <label>Email</label>
                <input
                    type="email"
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Email required'
                        }
                    })}
                />
                {
                    errors.email && <span>{errors.email.message}</span>
                }
                <label>password</label>
                <input
                    type="password"
                    {...register('password', {
                        required: {
                            value: true,
                            message: "Password required"
                        },
                        minLength: {
                            value: 4,
                            message: 'Minimum five characters'
                        },
                        maxLength: {
                            value: 8,
                            message: 'Maximum eight characters'
                        }
                    })}
                />
                {
                    errors.password && <span>{errors.password.message}</span>
                }
                <label>Confirm Password</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        required: {
                            value: true,
                            message: 'Confirm password required'
                        },
                        validate: (value) => {
                            if (value === watch('password')) {
                                return true;
                            } else {
                                return 'Los passwords no coinciden'
                            }
                        }
                    })}
                />
                {
                    errors.confirmPassword && <span>{errors.confirmPassword.message}</span>
                }
                <label>birthdate </label>
                <input
                    type="date"
                    {...register('date', {
                        required: {
                            value: true
                        }
                    })}
                />
                {
                    errors.date && <span>birthdate required</span>
                }
                <label>Country</label>
                <select
                    {...register('country')}
                >
                    <option value='mx'>Mexico</option>
                    <option value='co'>Colombia</option>
                    <option value='ar'>Argentina</option>
                </select>
                <label>profile picture</label>
                <input
                    type="file"
                    {...register('file')}
                />
                <label>Acepto terminos y condiciones</label>
                <input
                    type="checkbox"
                    {...register('checkbox', {
                        required: {
                            value: true,
                            message: 'Checkbox required'
                        }
                    })}
                />
                {errors.checkbox && <span>{errors.checkbox.message}</span>}
                <button type="submit">Send</button>

                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
            </form>
        </>
    );
}

export default UseForm;
<>
</>