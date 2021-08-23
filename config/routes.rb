Rails.application.routes.draw do
  root 'pages#index'

  match '/categories/:name', to: "pages#index", via: :all
  match '/categories', to: "pages#index", via: :all
  match '/', to: "pages#index", via: :all
end
