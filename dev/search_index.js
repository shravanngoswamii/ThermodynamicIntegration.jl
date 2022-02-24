var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ThermodynamicIntegration","category":"page"},{"location":"#ThermodynamicIntegration","page":"Home","title":"ThermodynamicIntegration","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ThermodynamicIntegration]","category":"page"},{"location":"#ThermodynamicIntegration.ThermInt","page":"Home","title":"ThermodynamicIntegration.ThermInt","text":"ThermInt([rng::AbstractRNG]; n_steps=30, n_samples=2000, n_warmup=500)\nThermInt([rng::AbstractRNG], schedule; n_samples=2000, n_warmup=500)\n\nschedule can be any iterable object\nn_steps is the number of steps for the schedule using the formula\n\n(1:n_steps) ./ n_steps).^5\n\nA ThermInt object can then be used as a function:\n\nalg = ThermInt(30)\nalg(loglikelihood, logprior, x_init)\n\n\n\n\n\n","category":"type"}]
}
