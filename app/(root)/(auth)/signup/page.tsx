import { SignUpForm } from "../_components/signup-form"

const SignUpPage = () => {
  return (
    <section className="w-full flex">
      <div className="w-3/5 h-fit">
        <img className="object-cover fixed top-0 bottom-0" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className="w-2/5">
      <SignUpForm />
      </div>
    </section>
  )
}

export default SignUpPage