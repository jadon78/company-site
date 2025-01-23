import { SignInForm } from "../_components/signin-form"

const SignInPage = () => {
  return (
    <section className="w-full">
      {/* <div className="grid-cols-6">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div> */}
      <div className="grid-cols-6 snap-y">
        <SignInForm />
      </div>
    </section>
  )
}

export default SignInPage