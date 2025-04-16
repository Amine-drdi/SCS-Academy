import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as Toast from "@radix-ui/react-toast";
import { MdEmail } from "react-icons/md";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email non valide")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email non valide"
    )
    .required("L'email est requis"),
});

const NewsLetter = () => {
  const [open, setOpen] = React.useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    console.log(values);
    setOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section className="flex justify-center xl:px-24 md:px-16 sm:px-8 px-4 py-16  from-blue-100 via-indigo-100 to-blue-50">
        <div className="relative w-full max-w-4xl flex flex-col gap-8 items-center bg-gradient-to-r p-10 rounded-xl shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Inscrivez-vous à notre newsletter
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto mb-6">
              Et tenez-vous au courant de nos actualités, nos dernières formations et des meilleurs astuces pour vous former !
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(submit)}
          >
            <input
              type="email"
              className={`${
                errors.email ? "border-red-600" : "border-gray-300"
              } w-full py-3 px-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
              placeholder="Entrez votre adresse email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300"
            >
              S'inscrire
            </button>
          </form>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="flex justify-center items-center bg-orange-500 rounded-full p-6 shadow-xl">
              <MdEmail className="text-white w-12 h-12 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      <Toast.Root
        className="relative flex flex-col gap-4 rounded-md bg-white p-4 shadow-lg"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="text-lg font-medium text-gray-800">
          Inscription réussie
        </Toast.Title>
        <Toast.Description asChild>
          <p className="text-sm text-gray-600">
            Vous recevrez bientôt nos newsletters dans votre boîte mail.
          </p>
        </Toast.Description>
        <Toast.Action
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          asChild
        >
          <button>X</button>
        </Toast.Action>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-4 outline-none" />
    </Toast.Provider>
  );
};

export default NewsLetter;
