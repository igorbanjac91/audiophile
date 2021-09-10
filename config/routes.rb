Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do 
    namespace :v1 do 
      resources :products, only: [:index, :show]
      resources :categories, only: [:index, :show]
      resources :line_items, only: [:create, :destroy, :update]
      resources :orders, only: [:show]
    end
  end

  match '/categories/:name', to: "pages#index", via: :all, as: :categories
  match '/products/:name', to: "pages#index", via: :all, as: :products
  match '/categories', to: "pages#index", via: :all
  match '/products', to: "pages#index", via: :all
  match '/checkout', to: "pages#index", via: :all
  match '/', to: "pages#index", via: :all
end
