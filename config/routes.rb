Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do 
    namespace :v1 do 
      resources :products, only: [:index, :show]
      resources :categories, only: [:index, :show]
      resources :line_items, only: [:create]
      resources :orders, only: [:show]
    end
  end

  match '/categories/:name', to: "pages#index", via: :all
  match '/products/:name', to: "pages#index", via: :all
  match '/categories', to: "pages#index", via: :all
  match '/products', to: "pages#index", via: :all
  match '/', to: "pages#index", via: :all
end
