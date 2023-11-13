import { Element } from 'react-scroll';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { toast } from 'react-toastify';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    reset();
    toast.success('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="bg-white py-8 md:p-8" id="contact">
      <Element name="contact" />
      <h2 className="font-poppins p-2 text-center text-32 font-bold uppercase text-black">
        GET IN TOUCH
      </h2>
      <hr className="border-yellow mx-auto w-24 border-2" />

      <br />
      <p className="font-poppins px-1 py-4 text-center font-light text-gray-700 md:text-20">
        Have a question about how neuroscience principles can help or hinder
        student success? Drop it here and we'll respond within 24 hours.
      </p>
      <form
        className="mx-auto flex flex-col gap-y-4 p-4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto flex w-full justify-between gap-x-2">
          <input
            className={cx(
              'focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300',
              ' w-1/2 border-2 border-gray-400  p-4 text-gray-700 transition-colors',
              {
                'border-red': errors.name,
                'bg-gray-200': !watch('name'),
              },
            )}
            type="text"
            placeholder="Full Name"
            {...register('name', { required: true, maxLength: 80 })}
          />
          <input
            className={cx(
              'focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300',
              ' w-1/2 border-2 border-gray-400  p-4 text-gray-700 transition-colors',
              {
                'border-red': errors.email,
                'bg-gray-200': !watch('email'),
              },
            )}
            type="email"
            placeholder="Email Address"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <textarea
          className={cx(
            'focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300',
            'w-full border-2 border-gray-400  p-4 text-gray-700 transition-colors',
            {
              'border-red': errors.message,
              'bg-gray-200': !watch('message'),
            },
          )}
          rows={4}
          placeholder="Message"
          {...register('message', { required: true })}
        />

        <input
          className="bg-tan mx-auto w-1/2 rounded p-2 px-4 py-2 font-bold text-white"
          type="submit"
        />
      </form>
    </div>
  );
};
