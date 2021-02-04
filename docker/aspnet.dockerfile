FROM mcr.microsoft.com/dotnet/sdk as base

WORKDIR /workspace
COPY aspnet .
RUN dotnet build -c Release
RUN dotnet publish --no-build -c Release -o out MsaDemo.Client/*.csproj

FROM mcr.microsoft.com/dotnet/aspnet

WORKDIR /workspace
COPY --from=base workspace/out .
CMD [ "dotnet", "MsaDemo.Client.dll" ]
